interface Block {
    
id: number;
type: string;
attributes: {
index: number;
timestamp: number;
data: string;
previousHash: string;
hash: string;
}
}

export default Block