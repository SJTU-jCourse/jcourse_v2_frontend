declare namespace JSX {
  interface IntrinsicElements {
    'em-emoji': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string;
        // 如果有其他属性，可以在这里添加
      },
      HTMLElement
    >;
  }
}