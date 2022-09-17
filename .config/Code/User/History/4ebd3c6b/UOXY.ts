import BlockAttributes from "./BlockAttributes";

type BlockType = "block";

export default interface Block {
    id: number,
    type: BlockType,
    attributes: BlockAttributes,
    loading: boolean;
            
}