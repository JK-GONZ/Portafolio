import ProjectCard from '@components/ProjectCard.tsx';
import data from '@assets/data.json' with { type: 'json' };

const Home = () => (
  <section className="space-y-12">
    <div className="text-center">
      <h2 className="mb-2 text-3xl font-bold">
        ¡Hi! My name is <span className='underline'>{data.data.About_me.Name}</span>.
      </h2>
      <h2 className="mb-2 text-xl font-bold">
        I have studied a {data.data.About_me.Education}
      </h2>
      <p className="text-muted">{data.data.About_me.Description}</p>
    </div>
    <div>
      <h3 className="mb-4 text-2xl font-semibold">Featured Projects</h3>
      <div className="text-muted relative grid grid-cols-3 gap-1 rounded-xl border-2 border-dashed border-(--border) p-6 text-center">
        <p className="text-muted absolute inset-0 flex items-center justify-center rounded-2xl p-6 text-2xl font-semibold shadow-md backdrop-blur-xs transition hover:shadow-lg">
          First project coming soon... ✨
        </p>
        <ProjectCard
          title="Example Project 1"
          description="Example description for project 1."
        />
      </div>
    </div>
  </section>
);

export default Home;
