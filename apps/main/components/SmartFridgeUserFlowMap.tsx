const flowSections = [
  {
    id: "entry",
    nodes: ["Start", "Onboarding", "Home"],
    primaryAction: "Home",
  },
  {
    id: "inventory",
    nodes: ["Add Item", "Search Ingredient", "Set Quantity", "Add Expiry Date", "Save Item"],
    primaryAction: "Save Item",
  },
  {
    id: "overview",
    nodes: ["Home Dashboard", "Check Alerts", "View Inventory", "Filter Category", "Select Ingredient"],
    primaryAction: "Select Ingredient",
  },
  {
    id: "recipe",
    nodes: ["Recipe Feed", "View Available Meals", "Check Missing Items", "Open Recipe", "Start Cooking"],
    primaryAction: "Start Cooking",
  },
  {
    id: "event",
    nodes: ["Event Planner", "Create Event", "Add Dishes", "Review Needed Items", "Generate Shopping List"],
    primaryAction: "Generate Shopping List",
  },
  {
    id: "shopping",
    nodes: ["Shopping List", "Mark Purchased", "Update Inventory", "Return Home"],
    primaryAction: "Update Inventory",
  },
];

export default function SmartFridgeUserFlowMap() {
  return (
    <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white px-4 py-10 text-neutral-950 sm:px-8 md:px-12 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {flowSections.map((section) => (
          <div
            key={section.id}
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:gap-x-3"
          >
            {section.nodes.map((node, nodeIdx) => {
              const isPrimaryAction = node === section.primaryAction;

              return (
                <div key={`${section.id}-${node}`} className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={`flex h-10 w-[104px] items-center justify-center border px-2 text-center text-[10px] font-bold leading-tight tracking-tight shadow-sm sm:h-11 sm:w-[118px] sm:text-[11px] ${
                      isPrimaryAction
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-neutral-300 bg-white text-neutral-950"
                    }`}
                  >
                    {node}
                  </div>
                  {nodeIdx < section.nodes.length - 1 && (
                    <span className="text-sm font-bold text-neutral-300 sm:text-base">→</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
