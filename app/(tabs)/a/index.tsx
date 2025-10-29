import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BadgeText,
  Button,
  Checkbox,
  Chip,
  Divider,
  Icon,
  Input,
  Spinner,
  Text,
} from '@/components/atom';
import { Bell, House, Settings } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function Home() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ScrollView contentContainerClassName="p-6 bg-background">
      <View className="flex-1 items-start justify-start bg-background p-4">
        <Text variant="h3">Atom Components Demo</Text>
        <Divider className="my-4" />
        <View className="my-2">
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="p">This is a paragraph.</Text>
          <Text variant="muted">This is a subtle text.</Text>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Buttons</Text>
        <View className="my-2 flex-row flex-wrap gap-2">
          <Button>
            <Text>Default</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="destructive">
            <Text>Destructive</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
          <Button variant="ghost">
            <Text>Ghost</Text>
          </Button>
          <Button variant="link">
            <Text>Link</Text>
          </Button>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Icons</Text>
        <View className="my-2 flex-row gap-2">
          <Icon as={House} />
          <Icon as={Settings} />
          <Icon as={Bell} />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Avatar</Text>
        <View className="my-2 flex-row items-center gap-2">
          <Avatar size="sm">
            <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
            <AvatarFallback>
              <Text>CN</Text>
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
            <AvatarFallback>
              <Text>CN</Text>
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
            <AvatarFallback>
              <Text>CN</Text>
            </AvatarFallback>
          </Avatar>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Badge</Text>
        <View className="my-2 flex-row flex-wrap gap-2">
          <Badge variant="default">
            <BadgeText variant="default">Default</BadgeText>
          </Badge>
          <Badge variant="secondary">
            <BadgeText variant="secondary">Secondary</BadgeText>
          </Badge>
          <Badge variant="destructive">
            <BadgeText variant="destructive">Destructive</BadgeText>
          </Badge>
          <Badge variant="outline">
            <BadgeText variant="outline">Outline</BadgeText>
          </Badge>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Chip</Text>
        <View className="my-2 flex-row flex-wrap gap-2">
          <Chip label="Default" />
          <Chip variant="secondary" label="Secondary" />
          <Chip variant="outline" label="Outline" />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Input</Text>
        <View className="my-2 w-full">
          <Input placeholder="This is an input" />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Spinner</Text>
        <View className="my-2 flex-row items-center gap-4">
          <Spinner size="sm" />
          <Spinner size="default" />
          <Spinner size="lg" />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Checkbox</Text>
        <View className="my-2 flex-row items-center gap-2">
          <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
          <Text>Accept terms and conditions</Text>
        </View>
      </View>
    </ScrollView>
  );
}
