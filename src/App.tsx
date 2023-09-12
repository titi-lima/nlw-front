import { FileVideo, Github, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💛 no NLW da Rocketseat
          </span>
          <Separator className="h-6" orientation="vertical"></Separator>
          <Button variant="outline">
            <Github size={16} className="m-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea
              placeholder="Inclua o prompt para a IA:"
              className="resize-none p-4 leading-relaxed"
            />
            <Textarea
              placeholder="Resultado gerado para a IA:"
              readOnly
              className="resize-none p-4 leading-relaxed"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no
            front para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo size={16} />
              Selecione um vídeo
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcrimption_prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula."
              />
            </div>
            <Button type="submit" className="w-full">
              Carregar vídeo
              <FileVideo size={16} className="ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs italic text-muted-foreground">
                Novas opções em breve!
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs italic text-muted-foreground">
                Valores mais altos geram resultados mais criativos, mas menos
                coerentes.
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Gerar
              <Wand2 size={16} className="ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
