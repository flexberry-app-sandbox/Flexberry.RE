package RE.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import RE.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Покупка
 */
@Entity(name = "IISREПокупка")
@Table(schema = "public", name = "Покупка")
public class Pokupka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Double количество;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CennovayaStela")
    @Convert("CennovayaStela")
    @Column(name = "ЦенноваяСтела", length = 16, unique = true, nullable = false)
    private UUID _cennovayastelaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CennovayaStela", insertable = false, updatable = false)
    private CennovayaStela cennovayastela;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ostatok")
    @Convert("Ostatok")
    @Column(name = "Остаток", length = 16, unique = true, nullable = false)
    private UUID _ostatokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ostatok", insertable = false, updatable = false)
    private Ostatok ostatok;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BazaKlienta")
    @Convert("BazaKlienta")
    @Column(name = "БазаКлиента", length = 16, unique = true, nullable = false)
    private UUID _bazaklientaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BazaKlienta", insertable = false, updatable = false)
    private BazaKlienta bazaklienta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Avtomatizaciya")
    @Convert("Avtomatizaciya")
    @Column(name = "Автоматизация", length = 16, unique = true, nullable = false)
    private UUID _avtomatizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Avtomatizaciya", insertable = false, updatable = false)
    private Avtomatizaciya avtomatizaciya;


    public Pokupka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getКоличество() {
      return количество;
    }

    public void setКоличество(Double количество) {
      this.количество = количество;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}