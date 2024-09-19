import { Card } from "@/ui-web/server-components";

type GenerationResult = {
  name: string;
  url: string;
};

const PokemonCard = ({ data }: { data: GenerationResult }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Pokemon Generations</Card.Title>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
      {data.name}-{data.url}
      </Card.Content>
    </Card.Root>
  );
};

export default PokemonCard;
