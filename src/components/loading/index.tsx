import { Center } from '../ui/center';
import { Spinner } from '../ui/spinner';

export function Loading() {
  return (
    <Center className="flex-1 bg-background-gray700">
      <Spinner color="bg-background-green500" />
    </Center>
  );
}
