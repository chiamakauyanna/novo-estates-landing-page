const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-8 px-4 h-full rounded shadow-xl bg-secondary hover:bg-primary hover:scale-105 hover:border-accent transition-all duration-300 group">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-dark text-lg">{title}</h3>
      <p className="text-textLight text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
