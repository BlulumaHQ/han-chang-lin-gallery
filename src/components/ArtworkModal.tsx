import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Artwork } from "@/data/artworks";

interface ArtworkModalProps {
  artwork: Artwork | null;
  open: boolean;
  onClose: () => void;
}

export default function ArtworkModal({ artwork, open, onClose }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background border-border overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 bg-muted">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-64 md:h-[70vh] object-cover"
            />
          </div>
          <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-center gap-4">
            <h2 className="font-serif text-2xl font-light text-foreground">{artwork.title}</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{artwork.year}</p>
              <p>{artwork.medium}</p>
              <p>{artwork.size}</p>
            </div>
            <div className="mt-4">
              <span className={`text-xs tracking-widest uppercase font-sans ${
                artwork.status === "Available" ? "text-foreground" : "text-muted-foreground"
              }`}>
                {artwork.status}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
