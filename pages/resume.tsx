export default function Resume() {
  return <div style={{ height: '100vh', overflow: 'hidden' }}>
    <iframe
      src='/api/resume'
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  </div>
}