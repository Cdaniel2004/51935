// Generated from c:/Users/danyc/OneDrive/Desktop/MetadataAnalyzer/MetadataGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MetadataGrammarParser}.
 */
public interface MetadataGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#metadata}.
	 * @param ctx the parse tree
	 */
	void enterMetadata(MetadataGrammarParser.MetadataContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#metadata}.
	 * @param ctx the parse tree
	 */
	void exitMetadata(MetadataGrammarParser.MetadataContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#campo}.
	 * @param ctx the parse tree
	 */
	void enterCampo(MetadataGrammarParser.CampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#campo}.
	 * @param ctx the parse tree
	 */
	void exitCampo(MetadataGrammarParser.CampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void enterNombreCampo(MetadataGrammarParser.NombreCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void exitNombreCampo(MetadataGrammarParser.NombreCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void enterValorCampo(MetadataGrammarParser.ValorCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void exitValorCampo(MetadataGrammarParser.ValorCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(MetadataGrammarParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(MetadataGrammarParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(MetadataGrammarParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(MetadataGrammarParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#fecha}.
	 * @param ctx the parse tree
	 */
	void enterFecha(MetadataGrammarParser.FechaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#fecha}.
	 * @param ctx the parse tree
	 */
	void exitFecha(MetadataGrammarParser.FechaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#listaTextos}.
	 * @param ctx the parse tree
	 */
	void enterListaTextos(MetadataGrammarParser.ListaTextosContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#listaTextos}.
	 * @param ctx the parse tree
	 */
	void exitListaTextos(MetadataGrammarParser.ListaTextosContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataGrammarParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void enterFinCampo(MetadataGrammarParser.FinCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataGrammarParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void exitFinCampo(MetadataGrammarParser.FinCampoContext ctx);
}