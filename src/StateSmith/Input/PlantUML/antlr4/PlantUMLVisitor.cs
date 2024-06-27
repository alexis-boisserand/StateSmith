//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.9.2
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from PlantUML.g4 by ANTLR 4.9.2

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using IToken = Antlr4.Runtime.IToken;

/// <summary>
/// This interface defines a complete generic visitor for a parse tree produced
/// by <see cref="PlantUMLParser"/>.
/// </summary>
/// <typeparam name="Result">The return type of the visit operation.</typeparam>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.9.2")]
[System.CLSCompliant(false)]
public interface IPlantUMLVisitor<Result> : IParseTreeVisitor<Result> {
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.line_ending_ows"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLine_ending_ows([NotNull] PlantUMLParser.Line_ending_owsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.optional_any_space"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOptional_any_space([NotNull] PlantUMLParser.Optional_any_spaceContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.ohs"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOhs([NotNull] PlantUMLParser.OhsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.start_end_state"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStart_end_state([NotNull] PlantUMLParser.Start_end_stateContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.history_state"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitHistory_state([NotNull] PlantUMLParser.History_stateContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.state_id"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitState_id([NotNull] PlantUMLParser.State_idContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.vertex"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitVertex([NotNull] PlantUMLParser.VertexContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.edge"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitEdge([NotNull] PlantUMLParser.EdgeContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.transition_event_guard_code"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTransition_event_guard_code([NotNull] PlantUMLParser.Transition_event_guard_codeContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.transition"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTransition([NotNull] PlantUMLParser.TransitionContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.state_child_states"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitState_child_states([NotNull] PlantUMLParser.State_child_statesContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.stereotype"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStereotype([NotNull] PlantUMLParser.StereotypeContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.state_explicit"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitState_explicit([NotNull] PlantUMLParser.State_explicitContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.rest_of_line"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRest_of_line([NotNull] PlantUMLParser.Rest_of_lineContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.state_contents"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitState_contents([NotNull] PlantUMLParser.State_contentsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.ignore"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitIgnore([NotNull] PlantUMLParser.IgnoreContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.diagram_element"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDiagram_element([NotNull] PlantUMLParser.Diagram_elementContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note_short"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote_short([NotNull] PlantUMLParser.Note_shortContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.kept_block_comment"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitKept_block_comment([NotNull] PlantUMLParser.Kept_block_commentContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note_multiline_contents_line"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote_multiline_contents_line([NotNull] PlantUMLParser.Note_multiline_contents_lineContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note_multiline"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote_multiline([NotNull] PlantUMLParser.Note_multilineContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note_on_link"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote_on_link([NotNull] PlantUMLParser.Note_on_linkContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note_floating"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote_floating([NotNull] PlantUMLParser.Note_floatingContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.note"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNote([NotNull] PlantUMLParser.NoteContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.startuml"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStartuml([NotNull] PlantUMLParser.StartumlContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.diagram"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDiagram([NotNull] PlantUMLParser.DiagramContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="PlantUMLParser.identifier"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitIdentifier([NotNull] PlantUMLParser.IdentifierContext context);
}
