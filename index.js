import fs from 'fs';
import path from 'path';
import MetadataAnalyzer from './MetadataAnalyzer.js';

// Función principal
function main() {
    // Verificar argumentos
    if (process.argv.length < 3) {
        console.error('Uso: node index.js <archivo_entrada>');
        process.exit(1);
    }

    // Obtener ruta del archivo de entrada
    const inputFile = process.argv[2];
    
    console.log(`Analizando archivo: ${inputFile}`);
    
    // Crear instancia del analizador
    const analyzer = new MetadataAnalyzer();
    
    // Realizar análisis
    const success = analyzer.analyze(inputFile);
    
    // Mostrar resultado del análisis
    console.log('\n=== RESULTADO DEL ANÁLISIS ===');
    if (success) {
        console.log('El análisis fue exitoso. No se encontraron errores.');
    } else {
        console.log('Se encontraron errores durante el análisis:');
        analyzer.getSyntaxErrors().forEach(error => {
            console.log(`[Línea ${error.line}, Columna ${error.column}] ${error.message}`);
        });
    }
    
    // Mostrar tabla de tokens
    console.log('\n=== TABLA DE LEXEMAS-TOKENS ===');
    const tokenTable = analyzer.generateTokenTable();
    console.log('Tipo\t\tTexto\t\tLínea\tColumna');
    console.log('-'.repeat(70));
    tokenTable.forEach(token => {
        const tipo = (token.type || '').toString().padEnd(16);
        const texto = (token.text || '').toString().padEnd(16);
        console.log(`${tipo}${texto}${token.line}\t${token.column}`);
    });

    // Mostrar árbol sintáctico siempre
    console.log('\n=== ÁRBOL DE ANÁLISIS SINTÁCTICO ===');
    console.log(analyzer.generateSyntaxTree());

    // Mostrar interpretación: null si hubo errores
    console.log('\n=== INTERPRETACIÓN ===');
    if (success) {
        console.log(JSON.stringify(analyzer.getInterpretedObject(), null, 2));
    } else {
        console.log('null');
    }
}

// Ejecutar la función principal
main();