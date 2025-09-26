import About from '@/components/About';
import PageWrapper from '@/components/PageWrapper';

export default function JornadaPage() {
  return (
    <PageWrapper isFullScreen={true}>
      <About />
    </PageWrapper>
  );
}