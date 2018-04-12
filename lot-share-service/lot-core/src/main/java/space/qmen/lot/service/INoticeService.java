package space.qmen.lot.service;

import space.qmen.lot.entity.Notice;

import java.util.List;

public interface INoticeService {
    List<Notice> listNoticeByUserId(Long id);
}
