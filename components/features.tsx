import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Arka plan şekli"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Arka plan şekli"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Akıllı Eşleştirme Sistemi
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-inter text-3xl font-semibold text-transparent md:text-4xl">
              Doğru aday, doğru işverenle buluşsun
            </h2>
            <p className="text-lg text-indigo-200/65">
              Adaylar başvuru yapmaz. Firmalar ihtiyaç bildirir, KariyerMatch profilleri analiz eder, en uygun eşleşmeyi otomatik oluşturur.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Platform özellikleri"
            />
          </div>

          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Profil Bazlı Eşleştirme
              </h3>
              <p className="text-indigo-200/65">
                Adaylar sadece profil oluşturur. Sistem, ilgi alanları, yetenek ve geçmiş deneyimlere göre firmalara en uygun kişiyi bulur.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Kullanıcı Odaklı Süreç
              </h3>
              <p className="text-indigo-200/65">
                Firmalar pozisyon açar, sistem öneride bulunur. Kabul edilen eşleşme sonrası aday süreç hakkında bilgilendirilir.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Mülakat Teklifi ile İletişim
              </h3>
              <p className="text-indigo-200/65">
                Adaylar uygun görülüp firma tarafından onaylanırsa direkt mülakat sürecine dahil edilir. Karmaşayı ortadan kaldırır.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Otomatik Bildirimler
              </h3>
              <p className="text-indigo-200/65">
                Sistem hem firmayı hem adayı süreç boyunca bilgilendirir. Takip kolaylaşır, iletişim kopukluğu ortadan kalkar.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Tek doğrultulu amaç
              </h3>
              <p className="text-indigo-200/65">
              {/* buraya diğer başvuru platformlarında data toplamak için ilan açılması, amaç dışı ilan olması ve platformumuzun başarısının eşleşme sonucu işe başlamayla alakalı olmasından dolayı avantajının olduğunu anlatmak gerek. */}
              KariyerMatch, yalnızca doğru adayları eşleştirerek, ilan kirliliğini ve amaç dışı ilanları ortadan kaldırır.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-inter text-[1rem] font-semibold text-gray-200">
                Gelişmiş Kurum Paneli
              </h3>
              <p className="text-indigo-200/65">
                Firma tarafı, aday eşleşmelerini görüntüler, teklif gönderir, süreci kontrol eder. Gereksiz başvurularla zaman kaybolmaz.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
