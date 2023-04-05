export function Overlay() {
  return (
    <>
      <div className="char" style={{ top: 80, left: 80 }}>
        P
      </div>
      <div className="char" style={{ top: 80, left: '25vw' }}>
        M
      </div>
      <div className="char" style={{ top: 80, left: '45vw' }}>
        N
      </div>
      <div className="char" style={{ top: '25vw', left: '25vw' }}>
        D
      </div>
      <div className="char" style={{ bottom: 80, left: '45vw' }}>
        R
      </div>
      <div className="char" style={{ bottom: 80, left: '65vw' }}>
        S
      </div>
      <div style={{ position: 'absolute', top: 80, right: 190, fontSize: '15px', textAlign: 'right', lineHeight: '1.5em' }}>
        DAVID
        <br />
        KBLLR
      </div>
      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 80,
          fontSize: '15px',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
          lineHeight: '1.5em'
        }}>
        —
        <br />
        04/04/23
      </div>
      <svg
        style={{ position: 'absolute', right: 80, top: '50%' }}
        width="54"
        height="23"
        viewBox="0 0 54 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line y1="1.5" x2="54" y2="1.5" stroke="#777" strokeWidth="3" />
        <line y1="11.5" x2="54" y2="11.5" stroke="#777" strokeWidth="3" />
        <line y1="21.5" x2="54" y2="21.5" stroke="#777" strokeWidth="3" />
      </svg>
    </>
  )
}
