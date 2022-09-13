import React from "react";
import FileViewer from "react-file-viewer";

function FileViewerComp({ file }) {
  return <FileViewer fileType="pdf" filePath={file} />;
}

export default FileViewerComp;
