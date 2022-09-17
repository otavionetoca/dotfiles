interface BlockAttributes {
    index: number,
    timestamp: number,
    data: string,
    previousHash: string,
    hash: string
}

export default interface Block {
    id: string,
    type: string,
    attributes: BlockAttributes
} 