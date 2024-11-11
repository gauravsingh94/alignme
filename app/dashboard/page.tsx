import { requireUser } from "../lib/hooks";
const DashboardPage = async () => {
  const session = await requireUser();
  return (
    <div>
      <p>This one is the Dashboard page.</p>
    </div>
  );
};

export default DashboardPage;
