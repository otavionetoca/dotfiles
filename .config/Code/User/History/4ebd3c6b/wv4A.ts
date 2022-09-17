type BlockType = "block";

interface BlockAttributes {
    index: number,
    timestamp: number,
    data: string,
    previousHash: string,
    hash: string,
}

export default interface Block {
    id: number,
    type: BlockType,
    attributes: BlockAttributes,
    loading: boolean;
            
}