package space.qmen.lot.domain;

import java.math.BigDecimal;
import java.sql.Timestamp;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public class Community {

    private Long id;
    private String name;
    private BigDecimal longitude;
    private BigDecimal latitude;
    private String address;
    private String icon;
    private int pid;
    private int seq;
    private int status;
    private Timestamp createDT;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() { return name; }
    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getLongitude() {
        return this.longitude;
    }
    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return this.latitude;
    }
    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public String getAddress() { return address; }
    public void setAddress(String address) {
        this.address = address;
    }

    public int getPid() { return pid; }
    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getIcon() { return icon; }
    public void setIcon(String icon) {
        this.icon = icon;
    }

    public int getSeq() { return seq; }
    public void setSeq(int seq) {
        this.seq = seq;
    }


    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }

    public Timestamp getCreateDT() {
        return createDT;
    }
    public void setCreateDT(Timestamp creat_dt) {
        this.createDT = createDT;
    }
}
