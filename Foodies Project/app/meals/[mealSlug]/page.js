export default function MealView(props) {
  return (
    <main>
      <h1>Meal page</h1>
      <h2>name: {props.params.mealSlug}</h2>
    </main>
  );
}
