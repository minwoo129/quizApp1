export type ProviderType = (args: ProviderArgs) => JSX.Element;
type ProviderArgs = {
  children: React.ReactNode;
};

export type ContextProviderType = (args: ContextProviderProps) => JSX.Element;
export type ContextProviderProps = {
  contexts: ProviderType[];
  children: JSX.Element;
};
