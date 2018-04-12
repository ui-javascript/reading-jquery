package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Notice;

import java.util.List;

public interface NoticeDao {
    List<Notice> listNoticeByUserId(@Param("id") Long id);
}
