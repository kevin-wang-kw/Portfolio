import Doggo from "@/components/illustrations/doggo";
import LinkButton from "@/components/LinkButton";
import { FolderOpenIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-4 p-6">
      <h2 className="text-2xl font-bold">Whoops... something went wrong!</h2>
      <LinkButton href="/">
        <FolderOpenIcon className="h-6 w-6" />
        Go to Portfolio
      </LinkButton>
      <Doggo />
    </div>
  );
}
