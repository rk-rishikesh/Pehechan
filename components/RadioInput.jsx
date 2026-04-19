const RadioInput = ({ label, ...props }) => {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-brand-espresso/20 outline-none checked:border-[0.5rem] checked:border-brand-rose focus-visible:ring-1 focus-visible:ring-brand-rose focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-brand-espresso">{label}</span>
    </label>
  );
};

export default RadioInput;
