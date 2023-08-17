export interface ExamplePageProps {
  // props
  title: string;
  description: string;
  isImportant: boolean;
}

export const ExamplePage = (props: ExamplePageProps) => {
  const { title, description, isImportant } = props;
  return (
    <div>
      <h1 className={isImportant ? "text-blue-400" : ""}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ExamplePage;
