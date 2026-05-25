import React, { useState } from 'react';

export const LeadForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [tel, setTel] = useState('');
  const [cidade, setCidade] = useState('');
  const [perfil, setPerfil] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    if (formatted.replace(/\D/g, '').length <= 11) {
      setTel(formatted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio de dados
    setSubmitted(true);
    // Limpar campos
    setNome('');
    setTel('');
    setCidade('');
    setPerfil('');
  };

  return (
    <section className="relative py-22 md:py-16 bg-pink text-white overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(900px_500px_at_12%_110%,rgba(255,255,255,0.16),transparent_60%),radial-gradient(700px_400px_at_100%_0%,rgba(0,0,0,0.18),transparent_60%)] before:pointer-events-none" id="form">
      <div className="relative wrap grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-[60px] items-start">
        <div className="text-left">
          <h2 className="font-extrabold text-[30px] sm:text-[38px] lg:text-[48px] tracking-tight leading-[1.02] mt-0 mb-5.5 text-white">
            Solicite um contato da <em className="not-italic text-ink">fábrica</em>
          </h2>
          <p className="text-base leading-[1.5] max-w-[480px] text-white/92 mb-7">
            Nosso comercial entra em contato para apresentar condições e apoiar sua entrada com o mix ideal para a sua cidade.
          </p>
          <ul className="flex flex-col gap-3.5 mt-2">
            <li className="list-none flex items-start gap-3 text-base">
              <span className="w-5.5 h-5.5 rounded-full bg-white text-pink inline-flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M20.3 6.7L9 18l-5.3-5.3 1.4-1.4L9 15.2l10-10 1.3 1.5z"/>
                </svg>
              </span>
              <div>
                <b className="font-bold">Atendimento direto da fábrica</b>
                <span className="block text-[13.5px] text-white/85">sem intermediários, sem distribuidor</span>
              </div>
            </li>
            <li className="list-none flex items-start gap-3 text-base">
              <span className="w-5.5 h-5.5 rounded-full bg-white text-pink inline-flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M20.3 6.7L9 18l-5.3-5.3 1.4-1.4L9 15.2l10-10 1.3 1.5z"/>
                </svg>
              </span>
              <div>
                <b className="font-bold">Mix sugerido por perfil de loja</b>
                <span className="block text-[13.5px] text-white/85">nosso time monta o pedido de entrada</span>
              </div>
            </li>
            <li className="list-none flex items-start gap-3 text-base">
              <span className="w-5.5 h-5.5 rounded-full bg-white text-pink inline-flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M20.3 6.7L9 18l-5.3-5.3 1.4-1.4L9 15.2l10-10 1.3 1.5z"/>
                </svg>
              </span>
              <div>
                <b className="font-bold">Materiais de PDV e divulgação</b>
                <span className="block text-[13.5px] text-white/85">imagens, vídeos e textos prontos</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full">
          {submitted ? (
            <div className="bg-white text-ink rounded-[20px] p-9 max-sm:p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] text-center flex flex-col items-center justify-center min-h-[350px] transition-all duration-300">
              <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center text-pink mb-4.5 animate-bounce">
                <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-2xl tracking-tight mb-2.5">Contato Recebido!</h3>
              <p className="text-[#555] text-[15px] leading-relaxed max-w-[320px] mb-6">
                Agradecemos o seu interesse. Nosso comercial entrará em contato pelo WhatsApp em até 24h úteis.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-pink duration-200 cursor-pointer"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white text-ink rounded-[20px] p-9 max-sm:p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="text-left mb-5.5">
                <h3 className="font-extrabold text-2xl tracking-tight mt-0 mb-0">
                  Em 24h úteis o time fala com você
                </h3>
              </div>

              <div className="flex flex-col gap-2 mb-3.5 text-left">
                <label htmlFor="nome" className="text-[12.5px] font-semibold tracking-wider uppercase text-[#444]">
                  Nome completo
                </label>
                <input 
                  id="nome" 
                  name="nome" 
                  type="text" 
                  placeholder="Como podemos te chamar" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border border-[#e3e3e3] bg-white rounded-xl px-4 py-3.5 text-base font-sora text-ink outline-none focus:border-pink transition-colors"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 mb-3.5 text-left">
                  <label htmlFor="tel" className="text-[12.5px] font-semibold tracking-wider uppercase text-[#444]">
                    Telefone (WhatsApp)
                  </label>
                  <input 
                    id="tel" 
                    name="tel" 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    value={tel}
                    onChange={handlePhoneChange}
                    className="border border-[#e3e3e3] bg-white rounded-xl px-4 py-3.5 text-base font-sora text-ink outline-none focus:border-pink transition-colors"
                    required 
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3.5 text-left">
                  <label htmlFor="cidade" className="text-[12.5px] font-semibold tracking-wider uppercase text-[#444]">
                    Cidade
                  </label>
                  <input 
                    id="cidade" 
                    name="cidade" 
                    type="text" 
                    placeholder="Cidade / UF" 
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="border border-[#e3e3e3] bg-white rounded-xl px-4 py-3.5 text-base font-sora text-ink outline-none focus:border-pink transition-colors"
                    required 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-3.5 text-left">
                <label htmlFor="perfil" className="text-[12.5px] font-semibold tracking-wider uppercase text-[#444]">
                  Perfil
                </label>
                <select 
                  id="perfil" 
                  name="perfil" 
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  className="border border-[#e3e3e3] bg-white rounded-xl px-4 py-3.5 text-base font-sora text-ink outline-none focus:border-pink transition-colors"
                  required
                >
                  <option value="">Selecione seu perfil</option>
                  <option value="Lojista">Lojista</option>
                  <option value="Revendedor">Revendedor</option>
                  <option value="Farmácia">Farmácia</option>
                  <option value="Supermercado">Supermercado</option>
                </select>
              </div>

              <button 
                className="w-full inline-flex items-center justify-center gap-2.5 bg-pink text-white px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-[#e60079] hover:-translate-y-[1px] shadow-[0_10px_24px_-10px_rgba(255,0,140,0.55)] cursor-pointer mt-1.5" 
                type="submit"
              >
                <span>Quero ser parceiro Ledebut</span>
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>

              <p className="text-xs text-[#666] leading-[1.5] text-center mt-3.5">
                Nosso comercial entra em contato para apresentar condições e apoiar sua entrada com o mix ideal.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
