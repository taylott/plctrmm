import createMarkup from "../../utilities/MarkUp"
const TextArea = ( { block } ) => <div dangerouslySetInnerHTML={ createMarkup(block.blockContent.content) }></div>
export default TextArea;