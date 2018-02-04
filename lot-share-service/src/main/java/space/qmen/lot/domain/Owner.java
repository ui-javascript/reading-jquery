package space.qmen.lot.domain;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public class Owner {
    private Long id;
    private String realName;
    private int gender;
    private String tel;
    private String password;
    private String salt;
    private int status;
    private String idCardNum;
    private String nickName;
    private String icon;
    private String introduction;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getRealName() {
        return realName;
    }
    public void setRealName(String realName) {
        this.realName = realName;
    }

    public int getGender() {
        return gender;
    }
    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }
    public void setSalt(String salt) {
        this.salt = salt;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }

    public String getIdCardNum() {
        return idCardNum;
    }
    public void setIdCardNum(String idCardNum) {
        this.idCardNum = idCardNum;
    }

    public String getNickName() {
        return nickName;
    }
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getIcon() {
        return icon;
    }
    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getIntroduction() {
        return introduction;
    }
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

}
