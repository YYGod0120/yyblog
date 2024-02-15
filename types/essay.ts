type FileMetadataType = "title" | "date" | "categories" | "excerpt";
export type FileMetadata = Record<FileMetadataType, string>;
export type FileData = Record<FileMetadataType | "html" | "id", string>;
