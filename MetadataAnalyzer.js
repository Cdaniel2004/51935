import antlr4 from 'antlr4';
import MetadataGrammarLexer from './parser/MetadataGrammarLexer.js';
import MetadataGrammarParser from './parser/MetadataGrammarParser.js';
import fs from 'fs';
import path from 'path';

class MetadataAnalyzer {
    constructor() {
        this.tokens = [];
        this.syntaxErrors = [];
        this.syntaxTree = null;
        this.interpretedObject = null;
    }

    /**
     * Analiza el archivo de entrada y realiza análisis léxico y sintáctico
     * @param {string} inputFilePath - Ruta del archivo a analizar
     * @returns {boolean} - true si el análisis fue exitoso, false si hubo errores
     */
    analyze(inputFilePath) {
        try {
            // Leer el archivo de entrada
            const input = fs.readFileSync(inputFilePath, 'utf8');
            
            // Crear el stream de caracteres
            const chars = new antlr4.CharStream(input);
            
            // Crear el lexer
            const lexer = new MetadataGrammarLexer(chars);
            
            // Configuramos un oyente de errores personalizado para el lexer
            lexer.removeErrorListeners();
            lexer.addErrorListener(this.createErrorListener());
            
            // Crear el stream de tokens
            const tokenStream = new antlr4.CommonTokenStream(lexer);
            
            // Realizar análisis léxico y guardar los tokens
            tokenStream.fill();
            this.tokens = Array.from(tokenStream.tokens);
            
            // Crear el parser
           const parser = new MetadataGrammarParser(tokenStream);
            
            // Configuramos un oyente de errores personalizado para el parser
            parser.removeErrorListeners();
            parser.addErrorListener(this.createErrorListener());
            
            // Realizar análisis sintáctico
            const tree = parser.metadata();
            this.syntaxTree = tree;
            
            // Interpretar el árbol y generar el objeto JavaScript
            this.interpretedObject = this.interpretTree(tree);
            
            // Verificar si hubo errores
            return this.syntaxErrors.length === 0;
        } catch (error) {
            this.syntaxErrors.push({
                line: 0,
                column: 0,
                message: `Error al analizar el archivo: ${error.message}`
            });
            return false;
        }
    }

    /**
     * Crea un oyente de errores personalizado para ANTLR4
     * @returns {Object} - Oyente de errores
     */
    createErrorListener() {
        const errorListener = Object.create(antlr4.error.ErrorListener.prototype);
        const self = this;
        
        errorListener.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
            self.syntaxErrors.push({
                line: line,
                column: column,
                message: msg
            });
        };
        
        return errorListener;
    }

    /**
     * Genera la tabla de lexemas-tokens
     * @returns {Array} - Array con la información de los tokens
     */
    generateTokenTable() {
        return this.tokens.map(token => {
            return {
                type: MetadataGrammarLexer.symbolicNames[token.type] || token.type,
                text: token.text,
                line: token.line,
                column: token.column
            };
        });
    }

    /**
     * Construye y devuelve el árbol de análisis sintáctico en formato de texto
     * @returns {string} - Representación textual del árbol sintáctico
     */
    generateSyntaxTree() {
        if (!this.syntaxTree) {
            return "No hay árbol sintáctico disponible";
        }
        
        return this.treeToString(this.syntaxTree);
    }

    /**
     * Convierte un árbol de análisis sintáctico a una representación de texto
     * @param {Object} tree - Nodo del árbol
     * @param {number} depth - Profundidad actual (para indentación)
     * @returns {string} - Representación textual del árbol
     */
    treeToString(tree, depth = 0) {
        if (!tree) {
            return '';
        }
        
        const indent = '  '.repeat(depth);
        let result = '';
        
        // Obtener el nombre de la regla
        const ruleName = tree.ruleContext ? 
            MetadataGrammarParser.ruleNames[tree.ruleContext.ruleIndex] : 
            'token';
        
        // Añadir el nodo actual
        result += `${indent}${ruleName}`;
        
        // Si es un token terminal, añadir su texto
        if (tree.symbol) {
            result += ` "${tree.symbol.text}"`;
        }
        
        result += '\n';
        
        // Recorrer los hijos
        for (let i = 0; i < tree.getChildCount(); i++) {
            result += this.treeToString(tree.getChild(i), depth + 1);
        }
        
        return result;
    }

    /**
     * Interpreta el árbol de análisis sintáctico y genera un objeto JavaScript
     * @param {Object} tree - Árbol de análisis sintáctico
     * @returns {Object} - Objeto JavaScript resultante
     */
    interpretTree(tree) {
        const result = {};
        
        // Recorrer todos los campos
        for (let i = 0; i < tree.getChildCount(); i++) {
            const node = tree.getChild(i);
            
            // Si es un campo
            if (node.ruleContext && 
                node.ruleContext.constructor.name === 'CampoContext') {
                
                const nombreCampoNode = node.getChild(0);
                const valorCampoNode = node.getChild(2);
                
                // Obtener el nombre del campo
                const nombreCampo = nombreCampoNode.getText();
                
                // Obtener el valor del campo según su tipo
                let valor;
                const valorNode = valorCampoNode.getChild(0);
                
                if (valorNode.ruleContext.constructor.name === 'TextoContext') {
                    // Es un texto, eliminar comillas
                    valor = valorNode.getText().replace(/^"|"$/g, '');
                } else if (valorNode.ruleContext.constructor.name === 'NumeroContext') {
                    // Es un número
                    valor = parseInt(valorNode.getText());
                } else if (valorNode.ruleContext.constructor.name === 'FechaContext') {
                    // Es una fecha
                    valor = valorNode.getText();
                } else if (valorNode.ruleContext.constructor.name === 'ListaTextosContext') {
                    // Es una lista de textos
                    valor = [];
                    
                    // Recorrer los elementos de la lista
                    for (let j = 1; j < valorNode.getChildCount() - 1; j += 2) {
                        const elemento = valorNode.getChild(j);
                        if (elemento.ruleContext && 
                            elemento.ruleContext.constructor.name === 'TextoContext') {
                            // Eliminar comillas
                            valor.push(elemento.getText().replace(/^"|"$/g, ''));
                        }
                    }
                }
                
                // Añadir al resultado
                result[nombreCampo] = valor;
            }
        }
        
        return result;
    }

    /**
     * Devuelve información sobre los errores de sintaxis encontrados
     * @returns {Array} - Array con los errores de sintaxis
     */
    getSyntaxErrors() {
        return this.syntaxErrors;
    }

    /**
     * Devuelve el objeto JavaScript generado tras la interpretación
     * @returns {Object} - Objeto JavaScript interpretado
     */
    getInterpretedObject() {
        return this.interpretedObject;
    }
}

export default MetadataAnalyzer;