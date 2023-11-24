package RE.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import RE.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Резервуар
 */
@Entity(name = "IISREРезервуар")
@Table(schema = "public", name = "Резервуар")
public class Rezervuar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолвоТоп")
    private Double колвотоп;

    @Column(name = "Состояние")
    private String состояние;

    @Column(name = "IdР")
    private Integer idр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ostatok")
    @Convert("Ostatok")
    @Column(name = "Остаток", length = 16, unique = true, nullable = false)
    private UUID _ostatokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ostatok", insertable = false, updatable = false)
    private Ostatok ostatok;


    public Rezervuar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getКолвоТоп() {
      return колвотоп;
    }

    public void setКолвоТоп(Double колвотоп) {
      this.колвотоп = колвотоп;
    }

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }

    public Integer getIdР() {
      return idр;
    }

    public void setIdР(Integer idр) {
      this.idр = idр;
    }


}