grammar MetadataGrammar;

// Parser rules
metadata        : campo+ EOF;
campo           : nombreCampo ':' valorCampo finCampo;
nombreCampo     : 'nombre' | 'tipo' | 'tamaño' | 'creado' | 'modificado' | 'autor' | 'descripcion' | 'etiquetas';
valorCampo      : texto | numero | fecha | listaTextos;
texto           : TEXTO;
numero          : NUMERO;
fecha           : FECHA;
listaTextos     : '[' (texto (',' texto)*)? ']';
finCampo        : ';';

// Lexer rules
TEXTO           : STRING_LITERAL;
NUMERO          : DIGIT+;
FECHA           : DIGIT DIGIT DIGIT DIGIT '-' DIGIT DIGIT '-' DIGIT DIGIT WHITESPACE? DIGIT DIGIT ':' DIGIT DIGIT;
STRING_LITERAL  : '"' (~["\r\n] | '\\"')* '"';

fragment DIGIT  : [0-9];
fragment LETTER : [a-zA-Z];
fragment CHAR   : LETTER | DIGIT | '_' | '.' | ' ' | ':';

WHITESPACE      : [ \t\r\n]+ -> skip;
COMMENT         : '//' ~[\r\n]* -> skip;