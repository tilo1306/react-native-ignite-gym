import { Image } from '@/src/components/ui/image';
import { VStack } from '@/src/components/ui/vstack';
import BackgroundImg from '@assets/images/background.png';

export default function SignIn() {
  return (
    <VStack className="flex-1 bg-background-gray700">
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        className="w-screen h-[624px]"
        size="none"
      />
    </VStack>
  );
}
