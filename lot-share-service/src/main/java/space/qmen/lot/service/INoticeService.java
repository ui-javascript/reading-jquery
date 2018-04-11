package space.qmen.lot.service;

import space.qmen.lot.model.entity.Notice;

import java.util.List;

public interface INoticeService {
    List<Notice> listNoticeByUserId(Long id);
}
