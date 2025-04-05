export default function ContactForm() {
  return (
    <form className="mx-auto max-w-xl space-y-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <input
        type="text"
        placeholder="Name"
        className="text-foreground border-border w-full rounded-xl border bg-(--card) p-3"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="text-foreground border-border w-full rounded-xl border bg-(--card) p-3"
        required
      />
      <textarea
        placeholder="Message"
        className="text-foreground border-border w-full rounded-xl border bg-(--card) p-3"
        rows={5}
        wrap="soft"
        required
      />
      <button
        type="submit"
        className="bg-accent hover:bg-accent-hover text-(foreground) rounded-xl px-6 py-2 transition-colors duration-300"
        disabled
      >
        Work in progress...
      </button>
    </form>
  );
}
