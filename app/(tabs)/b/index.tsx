import {
  BottomSheet,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormField,
  ListItem,
  ProgressSection,
  SearchBar,
  TabBar,
  Toolbar,
} from '@/components/molecule';
import { Button, Divider, Icon, Text } from '@/components/atom';
import { Home, Layers, Settings, ChevronRight } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useOverlay } from '@/hooks/useOverlay';

export default function MoleculeDemo() {
  const [activeTab, setActiveTab] = React.useState('Home');
  const [isSheetVisible, setSheetVisible] = React.useState(false);
  const { showAlert, showToast, showModal, hideModal } = useOverlay();

  return (
    <ScrollView contentContainerClassName="p-6 bg-background">
      <View className="flex-1 items-start justify-start bg-background p-4">
        <Text variant="h3">Molecule Components Demo</Text>
        <Divider className="my-4" />
        <Text variant="h2">Card</Text>
        <View className="my-2 w-full">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text>Card Title</Text>
              </CardTitle>
              <CardDescription>
                <Text>Card Description</Text>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>This is the card content.</Text>
            </CardContent>
            <CardFooter>
              <Button>
                <Text>Action</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">ListItem</Text>
        <View className="my-2 w-full">
          <ListItem
            title="List Item 1"
            subtitle="This is a subtitle"
            left={<Icon as={Home} />}
            right={<Icon as={ChevronRight} />}
          />
          <ListItem
            title="List Item 2"
            left={<Icon as={Settings} />}
            right={<Icon as={ChevronRight} />}
          />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">FormField</Text>
        <View className="my-2 w-full">
          <FormField label="Email" placeholder="Enter your email" />
          <FormField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            error="Password is too short"
          />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">SearchBar</Text>
        <View className="my-2 w-full">
          <SearchBar placeholder="Search..." />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Toolbar</Text>
        <View className="my-2 w-full">
          <Toolbar title="My App" left={<Icon as={Home} />} right={<Icon as={Settings} />} />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">TabBar</Text>
        <View className="my-2 w-full">
          <TabBar
            activeTab={activeTab}
            onTabPress={setActiveTab}
            tabs={[
              { name: 'Home', icon: Home },
              { name: 'Molecules', icon: Layers },
              { name: 'Settings', icon: Settings },
            ]}
          />
        </View>

        <Divider className="my-4" />

        <Text variant="h2">AlertDialog</Text>
        <View className="my-2">
          <Button onPress={() => showAlert({ title: 'Alert', message: 'This is an alert dialog.' })}>
            <Text>Show Alert</Text>
          </Button>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Toast</Text>
        <View className="my-2 flex-row gap-2">
          <Button onPress={() => showToast({ message: 'Saved!', variant: 'success' })}>
            <Text>Show Success Toast</Text>
          </Button>
          <Button onPress={() => showToast({ message: 'Something went wrong', variant: 'error' })}>
            <Text>Show Error Toast</Text>
          </Button>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">Modal</Text>
        <View className="my-2">
          <Button
            onPress={() =>
              showModal({
                dismissOnBackdrop: true,
                content: (
                  <View className="gap-3">
                    <Text variant="h3">Demo Modal</Text>
                    <Text>This is a simple modal body.</Text>
                    <Button onPress={hideModal}>
                      <Text>Close</Text>
                    </Button>
                  </View>
                ),
              })
            }
          >
            <Text>Show Modal</Text>
          </Button>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">BottomSheet</Text>
        <View className="my-2">
          <Button onPress={() => setSheetVisible(true)}>
            <Text>Show Bottom Sheet</Text>
          </Button>
          <BottomSheet visible={isSheetVisible} onClose={() => setSheetVisible(false)}>
            <Text variant="h3">Bottom Sheet</Text>
            <Text>This is a bottom sheet. You can put any content here.</Text>
          </BottomSheet>
        </View>

        <Divider className="my-4" />

        <Text variant="h2">ProgressSection</Text>
        <View className="my-2 w-full">
          <ProgressSection title="Profile Completion" progress={60} info="60%" />
        </View>
      </View>
    </ScrollView>
  );
}
