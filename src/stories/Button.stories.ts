import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button/button.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Type: Story = {
  args: {
    buttonType: 'primary',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    buttonType: 'link',
    href: '/',
    children: 'Button',
  },
};

export const Size: Story = {
  args: {
    size: 'lg',
    children: 'Button'
  }
}