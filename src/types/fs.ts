export interface FileNode {
  type: "file";
}

export interface FolderNode {
  type: "folder";
  children: FsTree;
}

export type FsNode = FileNode | FolderNode;

export type FsTree = Record<string, FsNode>;
