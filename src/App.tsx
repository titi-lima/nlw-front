import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 🩵 no NLW da Rocketseat
          </span>
          <Separator className="h-6" orientation="vertical"></Separator>
          <Button variant="outline">
            <Github size={16} className="m-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
