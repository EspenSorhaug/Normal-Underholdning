export default function HvemErVi() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
        <img
          src="/logo.jpg"
          alt="Normal Underholdning logo"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover shadow-lg shadow-[#C8102E]/20 flex-shrink-0"
        />
        <div>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-3">Hvem er vi?</h1>
          <p className="text-[#A89A90] text-lg">
            To gutter med for mye energi og for lite filter.
          </p>
        </div>
      </div>

      <section className="space-y-6 text-[#F5F5F5]/85 text-lg leading-relaxed">
        <p>
          Normal Underholdning er et underholdningsselskap basert i Oslo, startet av
          to venner med lidenskap for teater, musikk og det å få folk til å le.
        </p>
        <p>
          Vi holder på med impro, revy og musikal — og leier ut AV-utstyr til de
          som trenger lyd og lys til sine egne arrangementer.
        </p>
        <p className="text-[#A89A90] italic">
          ✏️ Mer informasjon, bilder og historikk kommer her.
        </p>
      </section>
    </div>
  )
}
