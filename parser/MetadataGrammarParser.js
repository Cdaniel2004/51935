// Generated from MetadataGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MetadataGrammarListener from './MetadataGrammarListener.js';
const serializedATN = [4,1,19,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,37,8,3,1,4,1,4,1,5,1,5,1,6,1,
6,1,7,1,7,1,7,1,7,5,7,49,8,7,10,7,12,7,52,9,7,3,7,54,8,7,1,7,1,7,1,8,1,8,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,2,9,56,0,19,1,0,0,0,2,25,1,0,0,0,
4,30,1,0,0,0,6,36,1,0,0,0,8,38,1,0,0,0,10,40,1,0,0,0,12,42,1,0,0,0,14,44,
1,0,0,0,16,57,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,3,4,2,
0,26,27,5,1,0,0,27,28,3,6,3,0,28,29,3,16,8,0,29,3,1,0,0,0,30,31,7,0,0,0,
31,5,1,0,0,0,32,37,3,8,4,0,33,37,3,10,5,0,34,37,3,12,6,0,35,37,3,14,7,0,
36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,7,1,0,0,0,38,
39,5,14,0,0,39,9,1,0,0,0,40,41,5,15,0,0,41,11,1,0,0,0,42,43,5,16,0,0,43,
13,1,0,0,0,44,53,5,10,0,0,45,50,3,8,4,0,46,47,5,11,0,0,47,49,3,8,4,0,48,
46,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,54,1,0,0,0,52,50,
1,0,0,0,53,45,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,12,0,0,56,15,1,
0,0,0,57,58,5,13,0,0,58,17,1,0,0,0,4,21,36,50,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MetadataGrammarParser extends antlr4.Parser {

    static grammarFileName = "MetadataGrammar.g4";
    static literalNames = [ null, "':'", "'nombre'", "'tipo'", "'tama\\u00F1o'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'", "'['", "','", "']'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "TEXTO", 
                             "NUMERO", "FECHA", "STRING_LITERAL", "WHITESPACE", 
                             "COMMENT" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "texto", "numero", "fecha", "listaTextos", "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MetadataGrammarParser.ruleNames;
        this.literalNames = MetadataGrammarParser.literalNames;
        this.symbolicNames = MetadataGrammarParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MetadataGrammarParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.campo();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0));
	        this.state = 23;
	        this.match(MetadataGrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MetadataGrammarParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.nombreCampo();
	        this.state = 26;
	        this.match(MetadataGrammarParser.T__0);
	        this.state = 27;
	        this.valorCampo();
	        this.state = 28;
	        this.finCampo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MetadataGrammarParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MetadataGrammarParser.RULE_valorCampo);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.texto();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.numero();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.fecha();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.listaTextos();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MetadataGrammarParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(MetadataGrammarParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MetadataGrammarParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(MetadataGrammarParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MetadataGrammarParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MetadataGrammarParser.FECHA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MetadataGrammarParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MetadataGrammarParser.T__9);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 45;
	            this.texto();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===11) {
	                this.state = 46;
	                this.match(MetadataGrammarParser.T__10);
	                this.state = 47;
	                this.texto();
	                this.state = 52;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 55;
	        this.match(MetadataGrammarParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MetadataGrammarParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MetadataGrammarParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MetadataGrammarParser.EOF = antlr4.Token.EOF;
MetadataGrammarParser.T__0 = 1;
MetadataGrammarParser.T__1 = 2;
MetadataGrammarParser.T__2 = 3;
MetadataGrammarParser.T__3 = 4;
MetadataGrammarParser.T__4 = 5;
MetadataGrammarParser.T__5 = 6;
MetadataGrammarParser.T__6 = 7;
MetadataGrammarParser.T__7 = 8;
MetadataGrammarParser.T__8 = 9;
MetadataGrammarParser.T__9 = 10;
MetadataGrammarParser.T__10 = 11;
MetadataGrammarParser.T__11 = 12;
MetadataGrammarParser.T__12 = 13;
MetadataGrammarParser.TEXTO = 14;
MetadataGrammarParser.NUMERO = 15;
MetadataGrammarParser.FECHA = 16;
MetadataGrammarParser.STRING_LITERAL = 17;
MetadataGrammarParser.WHITESPACE = 18;
MetadataGrammarParser.COMMENT = 19;

MetadataGrammarParser.RULE_metadata = 0;
MetadataGrammarParser.RULE_campo = 1;
MetadataGrammarParser.RULE_nombreCampo = 2;
MetadataGrammarParser.RULE_valorCampo = 3;
MetadataGrammarParser.RULE_texto = 4;
MetadataGrammarParser.RULE_numero = 5;
MetadataGrammarParser.RULE_fecha = 6;
MetadataGrammarParser.RULE_listaTextos = 7;
MetadataGrammarParser.RULE_finCampo = 8;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_metadata;
    }

	EOF() {
	    return this.getToken(MetadataGrammarParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitMetadata(this);
		}
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitCampo(this);
		}
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_nombreCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitNombreCampo(this);
		}
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_valorCampo;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitValorCampo(this);
		}
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(MetadataGrammarParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitTexto(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(MetadataGrammarParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitNumero(this);
		}
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_fecha;
    }

	FECHA() {
	    return this.getToken(MetadataGrammarParser.FECHA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitFecha(this);
		}
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_listaTextos;
    }

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitListaTextos(this);
		}
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataGrammarParser.RULE_finCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataGrammarListener ) {
	        listener.exitFinCampo(this);
		}
	}


}




MetadataGrammarParser.MetadataContext = MetadataContext; 
MetadataGrammarParser.CampoContext = CampoContext; 
MetadataGrammarParser.NombreCampoContext = NombreCampoContext; 
MetadataGrammarParser.ValorCampoContext = ValorCampoContext; 
MetadataGrammarParser.TextoContext = TextoContext; 
MetadataGrammarParser.NumeroContext = NumeroContext; 
MetadataGrammarParser.FechaContext = FechaContext; 
MetadataGrammarParser.ListaTextosContext = ListaTextosContext; 
MetadataGrammarParser.FinCampoContext = FinCampoContext; 
