interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-md transition hover:shadow-lg">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);

export default ProjectCard;
