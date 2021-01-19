create database learning_from_distance
--�� ����� �� �����  �������� �������� ���� ����� ����


create table Users(
Id nvarchar(9) primary key,
FirstName nvarchar(30),
LastName nvarchar(30),
Adress nvarchar(30),
Specialization int not null constraint fK_Users_Specializations foreign key(Specialization)references Specializations,
Rol_ int not null constraint fK_Users_Roles foreign key(Rol_)references Roles,
)

create table Roles(
RoleNum int not null  primary key,
RoleName nvarchar(30)
)
create table  Specializations(
SpecializationNum int not null  primary key,
SpecializationName nvarchar(30)
)


--���� �� �� userid   ����� ����� ����� �� �"� ���� ���?
create table Subjects(
SubjectNum int not null  primary key,
SpecializationNum int not null constraint fK_subject_Specializations foreign key(SpecializationNum)references Specializations,
SubjectName nvarchar(30),
UserId nvarchar(9) not null constraint fK_Subject_users foreign key(UserId)references Users,
)
create  table Schedule(
ScheduleDate date primary key,
SpecializationNum int not null constraint fK_schedule_Specializations foreign key(SpecializationNum)references Specializations,
SubjectNum int not null constraint fK_schedule_Subject foreign key(SubjectNum) references Subjects
)
--1.	�"� ������
--2.	����� ���� ���� �� �"�
--3.	���� ������ �������
--4.	�� ��� ������ �������
--5.	���� ���
 create table Times(
 UserId nvarchar(9) not null constraint fK_Times_users foreign key(UserId)references Users,
 FromTime datetime,
ToTime datetime,
 ClassNum int 
 constraint pk primary key (UserId,FromTime)
 )
 CREATE TABLE LessonsSeen(
NumList int identity primary key,
StudentId nvarchar(9)not null constraint fK_LessonsSeen_StudentId foreign key(StudentId)references Users,
NumSubject int not null constraint fk_LessonsSeen_NumSubject foreign key(NumSubject)references Subjects,
ScheduleDate date not null constraint fk_LessonsSeen_ScheduleDate foreign key(ScheduleDate)references Schedule
)
create table Files
(
FileId int identity ,
SubjectNum int  constraint fK_Files_SubjectNum foreign key(SubjectNum)references Subjects,
FileCategory nvarchar(15),
NameFile nvarchar(20),
RoutingFile nvarchar(50),
EndingFile nvarchar(10),
UpdateDateFile date,
constraint pkFile primary key (FileId,UpdateDateFile)
)
 use [learning_from_distance]
 insert into Roles values('teacher')
 insert into Roles values('student')