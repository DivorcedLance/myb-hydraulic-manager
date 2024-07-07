import { DocumentCard } from "./DocumentCard";

export function DocumentList({ documents }) {
  return (
    <div className="flex flex-col h-full">
      {documents.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  )
}