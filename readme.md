# Görev 2: Ergineer Mangal Dinamik Gallery Resimleri

Buddy'in ile son görevde güzel bir uyum yakaladınız ve görevi tam yaptınız.
Yöneticin, JS tarafındaki yaptığın işten çok memnun kaldı. Bu yüzden sana ekstra bir görev verdi.

Daha önce statik yapılan bir sitenin imajlarının dinamik olarak eklenmesini isteniyor.

index.js dosyasında resimlerin linklerini, alt metinlerini içeren bir array var!

Senden bu array üzerinde bir döngü yaparak .gallery-content class'ına sahip div'in içindeki img'ların:
1- linklerini eklemeni
2- alt metinlerini .setAttribute ile eklemeni
3- her image'a 'border-md' class'ını .classList'in add metodu ile eklemeni istiyor.

- İpucu: for döngüsü yapabilirsin
- İpucu: .querySelectorAll ile image'lara ulaşabilirsin.

**Dikkat**

- Sadece index.js'de kod yazınız.
- css dosyasının linkinde sorun var! Önce onu düzeltiniz.

## Önemli Notlar

- Proje dizinindeki `user.json` dosyasını bulun ve `user_id` alanını NextGen proje ekranında görünen kendi `user_id` değeriniz ile güncelleyin.
- Geliştirme sırasında testleri izlemek için `npm test` komutunu kullanın.
- Testleri çalıştırıp skoru NextGen'e kaydetmek için `npm run sendresults` komutunu kullanın.
