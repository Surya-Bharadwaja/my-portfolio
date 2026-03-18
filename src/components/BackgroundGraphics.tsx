export default function BackgroundGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Binary numbers block 1 */}
      <div className="absolute top-32 left-10 md:left-20 text-accent/5 font-mono text-xs md:text-sm whitespace-pre select-none">
        {`01010100 01101000 01100101
00100000 01001101 01100001
01110100 01110010 01101001
01111000 00100000 01101000
01100001 01110011 00100000
01111001 01101111 01110101`}
      </div>

      {/* Binary numbers block 2 */}
      <div className="absolute bottom-40 right-10 md:right-32 text-accent/5 font-mono text-xs md:text-sm whitespace-pre select-none">
        {`1110011 01111001 01110011
01110100 01100101 01101101
00100000 01100110 01100001
01101001 01101100 01110101
01110010 01100101 00000000`}
      </div>

      {/* Encryption Padlock Outline */}
      <svg className="absolute top-1/4 right-[5%] md:right-[15%] w-48 h-48 md:w-64 md:h-64 text-accent/5" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>

      {/* Network Nodes Outline */}
      <svg className="absolute bottom-1/4 left-[-10%] md:left-[5%] w-64 h-64 md:w-80 md:h-80 text-accent/[0.03]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 17.5L10 9m4 8.5L14 9M12 8L12 8m-5 11l10 0" />
      </svg>

      {/* Cybersecurity Crosshair/Terminal Outline */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] text-accent/[0.02]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="30" strokeDasharray="1 4" />
        <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="2 10" />
        <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="2 10" />
      </svg>
      
      {/* Hexagon pattern outline on the right side */}
      <svg className="absolute top-[60%] right-[-10%] md:right-[5%] w-72 h-72 md:w-96 md:h-96 text-accent/[0.04]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
        <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" />
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <polygon points="50,30 65,40 65,60 50,70 35,60 35,40" />
      </svg>
    </div>
  );
}
