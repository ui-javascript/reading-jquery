package space.qmen.lot.domain;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public class Space {

    private Long id;
    private String name;
    private int status;
    private String description;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
