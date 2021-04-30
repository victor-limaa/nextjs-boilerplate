import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  args: {
    title: 'Global Arg'
  }
} as Meta

export const Basic: Story = (args) => <Header {...args} />
export const GlobalArg: Story = (args) => <Header {...args} />

// Basic.args = {
//   title: 'Title vindo do args'
// }
