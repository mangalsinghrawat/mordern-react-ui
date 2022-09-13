import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React from "react";

function ResumeFileViewer(props) {
  const { resumeFiles } = props;
  const docs = [
    { uri: require("../Data/Resume-Mangal.pdf") },
    { uri: require("../Data/MangalResume.docx") },
  ];
  return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
}

export default ResumeFileViewer;
